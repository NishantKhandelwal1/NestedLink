/// <reference types="react" />
/**
 * Linked React components for building forms implementing React 0.14 valueLink semantic.
 *
 * WTFPL License, (c) 2016 Vlad Balin, Volicon.
 */
import * as React from 'react';
import { Validator, Link } from './link';
export declare type AnyProps = {
    [key: string]: any;
};
export declare function Input(props: {
    type: 'checkbox';
    checkedLink: Link<boolean>;
} & AnyProps): JSX.Element;
export declare function Input(props: {
    type: 'radio';
    value: any;
    valueLink: Link<any>;
} & AnyProps): JSX.Element;
export declare function Input(props: {
    valueLink: Link<string>;
} & AnyProps): JSX.Element;
export declare const isRequired: Validator<any>;
export declare const isEmail: Validator<string>;
export interface NumberInputProps {
    positive?: boolean;
    integer?: boolean;
    valueLink: Link<number>;
}
export declare class NumberInput extends React.Component<NumberInputProps & AnyProps, {}> {
    componentWillMount(): void;
    value: string;
    error: any;
    setValue(x: any): void;
    setAndConvert(x: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    onKeyPress: (e: any) => void;
    onChange: (e: any) => void;
}
/**
 * Wrapper for standard <textarea/> to be compliant with React 0.14 valueLink semantic.
 * Simple supports for link validation - adds 'invalid' class if link has an error.
 *
 *     <TextArea valueLink={ linkToText } />
 */
export declare const TextArea: ({valueLink, ...props}: {
    valueLink: Link<string>;
} & AnyProps) => JSX.Element;
/**
 * Wrapper for standard <select/> to be compliant with React 0.14 valueLink semantic.
 * Regular <option/> tags must be used:
 *
 *     <Select valueLink={ linkToSelectedValue }>
 *         <option value="a">A</option>
 *         <option value="b">B</option>
 *     </Select>
 */
export declare const Select: ({valueLink, children, ...props}: {
    valueLink: Link<any>;
} & AnyProps) => JSX.Element;
/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
export declare const Radio: ({className, checkedLink, children}: {
    checkedLink: Link<boolean>;
} & AnyProps) => JSX.Element;
/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
export declare const Checkbox: ({className, checkedLink, children}: {
    valueLink: Link<boolean>;
} & AnyProps) => JSX.Element;
