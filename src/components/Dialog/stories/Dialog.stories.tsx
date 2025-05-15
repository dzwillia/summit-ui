import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default dialog with a form layout.
 * Demonstrates a typical dialog with header, content, and footer sections.
 */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              className="col-span-3 h-10 rounded-sm border border-input bg-background px-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              className="col-span-3 h-10 rounded-sm border border-input bg-background px-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="primary">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * A dialog with destructive action.
 * Shows a confirmation dialog with both cancel and destructive actions.
 */
export const WithDestructiveAction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Cancel</Button>
          <Button variant="danger">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
