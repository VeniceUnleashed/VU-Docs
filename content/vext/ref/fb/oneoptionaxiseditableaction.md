---
title: OneOptionAxisEditableAction
---
### Base Classes

[EditableAction](/vext/ref/fb/editableaction/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| OneOptionAxisEditableAction()                                                          | Create a new instance of this container type.                                                                                                 |
| OneOptionAxisEditableAction(OneOptionAxisEditableAction other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| OneOptionAxisEditableAction([EditableAction](/vext/ref/fb/editableaction/) other)                    | Upcast an instance of type [EditableAction](/vext/ref/fb/editableaction/) to [OneOptionAxisEditableAction](/vext/ref/fb/oneoptionaxiseditableaction/).                    |
| OneOptionAxisEditableAction([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OneOptionAxisEditableAction](/vext/ref/fb/oneoptionaxiseditableaction/). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| header | string |             |
| invert | bool   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OneOptionAxisEditableAction](/vext/ref/fb/oneoptionaxiseditableaction/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OneOptionAxisEditableAction](/vext/ref/fb/oneoptionaxiseditableaction/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
