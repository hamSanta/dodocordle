import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word. Words can be characters,
        locations, items, and others that are found in or related to Genshin Impact
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell 
          isRevealing={true} 
          isCompleted={true} 
          value="R" 
          status="correct"
        />
        <Cell value="O" />
        <Cell value="W" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="A" />
        <Cell value="C" />
        <Cell 
          isRevealing={true}
          isCompleted={true}
          value="H" 
          status="present"
        />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter H is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="B" />
        <Cell value="Y" />
        <Cell value="S" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Based on an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Inspired by {' '}
        <a href="https://paimordle.vercel.app/" className="underline font-bold">
          Paimordle 
        </a>{' '}
        and {' '}
        <a href="https://paimordle-vi.vercel.app/" className="underline font-bold">
          Paimordle IV
        </a>{' '}
        - go play them!
      </p>

    </BaseModal>
  )
}
