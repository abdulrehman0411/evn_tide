'use client';
import React from 'react';
import { Plus } from 'lucide-react';
import invoices from '@/invoice.json';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DatePickerDemo } from '@/components/ui/datepickerdemo';
import { Button } from '@/components/ui/button';
import TransactionForm from '@/components/ui/form';

const Transactions = () => {
  return (
    <div>
      <div className='p-4 flex items-center justify-between overflow-hidden'>
        <div className='ml-4 mt-2 h-12 rounded-xl flex gap-4 items-center'>
          <DatePickerDemo />
          <Select>
            <SelectTrigger className='w-[170px] bg-white'>
              <SelectValue placeholder='Coin' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px] bg-white'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search input visible only on large screens */}

        <div className='flex mr-4'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'default'}
                className='bg-indigo-900 rounded-lg lg:w-[215px] lg:ml-0 ml-2 h-12 font-normal'
              >
                <div className='flex items-center gap-2'>
                  <span>
                    <Plus />
                  </span>
                  <span className='text-white font-semibold text-lg'>
                    Create Transaction
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
              <DialogHeader>
                <DialogTitle className='text-2xl'>
                  Create Transaction
                </DialogTitle>
              </DialogHeader>

              <TransactionForm />

              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='ml-9 mt-2 mr-9'>
        <Table>
          <TableHeader className=''>
            <TableRow>
              <TableHead>TO</TableHead>
              <TableHead>TRANSACTION ID</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TIME</TableHead>
              <TableHead>COIN</TableHead>
              <TableHead>AMOUNT</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices &&
              invoices.map(invoice => (
                <TableRow key={invoice.transactionid}>
                  <TableCell className='font-medium text-base'>
                    {invoice.name}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.transactionid}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.date}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.time}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.coin}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.amount}
                  </TableCell>
                  <TableCell className='font-normal text-base'>
                    {invoice.status}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
