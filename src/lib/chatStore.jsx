import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import { db } from './firebase'

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
    // changeChat
}))