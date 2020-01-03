---
title: OneOptionButtonEditableAction
---
### Base Classes

[EditableAction](EditableAction)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| OneOptionButtonEditableAction()                                                          | Create a new instance of this container type.                                                                                                     |
| OneOptionButtonEditableAction(OneOptionButtonEditableAction other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| OneOptionButtonEditableAction([EditableAction](EditableAction) other)                    | Upcast an instance of type [EditableAction](EditableAction) to [OneOptionButtonEditableAction](OneOptionButtonEditableAction).                    |
| OneOptionButtonEditableAction([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OneOptionButtonEditableAction](OneOptionButtonEditableAction). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| header | string |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OneOptionButtonEditableAction](OneOptionButtonEditableAction) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OneOptionButtonEditableAction](OneOptionButtonEditableAction) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
