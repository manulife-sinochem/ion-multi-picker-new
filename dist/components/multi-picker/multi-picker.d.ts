import { AfterContentInit, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PickerController, Form, Item, PickerColumn, PickerCmp, PickerColumnCmp } from 'ionic-angular';
import { MultiPickerColumn } from './multi-picker-options';
export declare const MULTI_PICKER_VALUE_ACCESSOR: any;
export declare class MultiPicker implements AfterContentInit, ControlValueAccessor, OnDestroy {
    private _form;
    private _item;
    private _pickerCtrl;
    _disabled: any;
    _labelId: string;
    _text: string;
    _fn: Function;
    _isOpen: boolean;
    _value: any;
    _pickerCmp: PickerCmp;
    _pickerColumnCmps: PickerColumnCmp[];
    _isDependent: boolean;
    _sequence: number[];
    _originSelectedIndexes: number[];
    id: string;
    cancelText: string;
    doneText: string;
    resetText: string;
    multiPickerColumns: MultiPickerColumn[];
    separator: string;
    placeholder: string;
    showReset: Boolean;
    cssClass: string;
    ionChange: EventEmitter<any>;
    ionCancel: EventEmitter<any>;
    constructor(_form: Form, _item: Item, _pickerCtrl: PickerController);
    _click(ev: UIEvent): void;
    _keyup(): void;
    open(): void;
    generateSequence(): void;
    generate(picker: any): void;
    validate(picker: any): void;
    getOptionParentValue(colIndex: any, option: any): any;
    getParentCol(childColIndex: number, columns: PickerColumn[]): PickerColumn;
    divyColumns(picker: any): void;
    setValue(newData: any): void;
    getValue(): string;
    checkHasValue(inputValue: any): void;
    updateText(): void;
    disabled: boolean;
    writeValue(val: any): void;
    ngAfterContentInit(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
    onChange(val: any): void;
    onTouched(): void;
    ngOnDestroy(): void;
    convertObjectToString(newData: any): string;
    reset(): void;
}