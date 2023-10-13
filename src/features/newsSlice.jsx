import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  news: [],
  loading: false,
  error: false,
}

export const getNews = createAsyncThunk(
  "getNews", //? action types
  //? async callback func

  async (thunkAPI, { rejectWithValue }) => {
    const apikey= process.env.REACT_APP_API_KEY;
    const apiurl = process.env.REACT_APP_API_URL;
    const baslik = 'top-headlines'
    const source = 'bbc-news'
    const url = `${apiurl}${baslik}?sources=${source}&apiKey=${apikey}`
    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=63d411bf8ee347d286cc75f9c4026c8e`

    try {
      const { data } = await axios(url)
      // console.log(data)
      return data.articles
    } catch (error) {
      console.log(error)
      return rejectWithValue("Something went wrong")
    }
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearNews } = newsSlice.actions

export default newsSlice.reducer
