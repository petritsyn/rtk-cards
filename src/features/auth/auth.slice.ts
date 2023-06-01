import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi, ProfileType } from "./auth.api"

const register = createAsyncThunk("auth/register", async (arg, thunkAPI) => {
  authApi.register(arg).then((res) => console.log(res))
})

const login = createAsyncThunk("auth/register", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI
  authApi.login(arg).then((res) => {
    dispatch(authActions.setProfile({ profile: res.data }))
  })
})

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload.profile
    },
  },
})

export const authReducer = slice.reducer
export const authThunks = { register, login }
export const authActions = slice.actions
