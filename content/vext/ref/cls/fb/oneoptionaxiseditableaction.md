---
title: OneOptionAxisEditableAction (Frostbite Container)
---
### Base Classes

[EditableAction](EditableAction)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| OneOptionAxisEditableAction()                                                          | Create a new instance of this container type.                                                                                                 |
| OneOptionAxisEditableAction(OneOptionAxisEditableAction other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| OneOptionAxisEditableAction([EditableAction](EditableAction) other)                    | Upcast an instance of type [EditableAction](EditableAction) to [OneOptionAxisEditableAction](OneOptionAxisEditableAction).                    |
| OneOptionAxisEditableAction([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OneOptionAxisEditableAction](OneOptionAxisEditableAction). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| header | string |             |
| invert | bool   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OneOptionAxisEditableAction](OneOptionAxisEditableAction) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OneOptionAxisEditableAction](OneOptionAxisEditableAction) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
