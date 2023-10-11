import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const customAction = createAction("preloader/incrementByAmt");
export const fetchQueryBased = createAsyncThunk("preloader/queryBased",async(_,thunkAPI)=>{
    
    let data = await fetch(`https://starpi-portfolio-service.onrender.com/api/cards?filters[Title][$startsWithi]=${_}&populate=*`).then(res=>res.json());
    return data;

})
export const fetchDataStrapi = createAsyncThunk("preloader/getData",


    async (_, thunkAPI) => {

        let data = await fetch("https://starpi-portfolio-service.onrender.com/api/cards?populate=*");
        let recieved = 0;
        let reader = data.body.getReader({ mode: "byob" });

        let flag = true;
        let chunks = []
        let buffer = new ArrayBuffer(200);
        let offset = 0;

        while (flag) {


            const { done, value } = await reader.read(new Uint8Array(buffer)).catch((err) => console.log(err));

            let payload = { value: recieved };

            if (done) {
                flag = false;
            } else {
                buffer = new ArrayBuffer(1024);
                offset += value.byteLength;
                recieved += value.byteLength;
                chunks.push(value);
                thunkAPI.dispatch(customAction(payload));
            }



        }

        let position = 0;
        let result = new Uint8Array(recieved);
        // Order the chunks by their respective position
        for (let chunk of chunks) {
            result.set(chunk, position);
            position += chunk.length;
        }
        data = JSON.parse(new TextDecoder('utf-8').decode(result));
        return new Promise((resolve, reject) => {

            if (data) {
                resolve(data);
            } else {
                reject(data);
            }
        })
    }
)

const dataSlice = createSlice({
    name: "preloader",
    initialState: { data: [], loading: true, value: 0, searchingStatus: false, fdata: [], stack: [],record:false},
    reducers: {
        increment(state, action) {

            state.value += action.payload.value;
        },
        updateLoader(state) {
            state.loading = false;

        },
        updateSearchStatus(state, action) {

            state.searchingStatus = action.payload.val;
        },
        updateTags(state, action) {

            const tags = action.payload.tags

            if (tags.length==0) {
                state.fdata = [...state.data];
                return;
            }

            const newArr = []
            
            let flag = 0;
            for (let k of state.fdata) {
                flag = 0;
                for (let t of Object.keys(k?.attributes?.tags)) {

                    if (tags.includes(t)) {
                        flag++;
                        
                    }

                }
                if (flag==tags.length) {
                    newArr.push(k);
                }
            }
            

            state.fdata = [...newArr]
            if (newArr.length < 1) return;
            state.stack = [...state.stack, [...state.fdata]];
            
        },
        rollBack(state, action) {
           
            const tags = action.payload.tags
            // state.fdata = state.stack[state.stack.length - 1]
            // state.stack.pop()
            // if (state.stack.length == 1) {
            //     state.fdata = [...state.data.data]

            // }
            if (tags.length==0) {
                state.fdata = [...state.data.data]
                
                return;
            }
            state.fdata = state.fdata = [...state.data.data]
            const newArr = []
            let flag = 0;
            for (let k of state.fdata) {
                flag = 0;
                for (let t of Object.keys(k?.attributes?.tags)) {

                    if (tags.includes(t)) {
                        flag++;
                        
                    }

                }
                if (flag==tags.length) {
                    newArr.push(k);
                }
            }
            state.fdata = [...newArr]
            if (newArr.length < 1) return;
            state.stack = [...state.stack, [...state.fdata]];
            
        },
        recordUpdate(state,action){
            state.record = action.payload.val
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchDataStrapi.fulfilled, (state, action) => {

            state.data = action.payload;
            state.fdata = [...action.payload.data]
            state.stack = [...state.stack, action.payload.data]

        })
        builder.addCase(customAction, (state, action) => {

            state.value = action.payload.value;
        })
        builder.addCase(fetchQueryBased.fulfilled,(state,action)=>{
            
            state.data = action.payload;
            state.fdata = [...action.payload.data]
            state.stack = [...state.stack, action.payload.data]
            state.searchingStatus = false;
        })
    }
});

export const actions = dataSlice.actions;
export default dataSlice.reducer;