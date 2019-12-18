---
title: InputActionsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| InputActionsData()                                                          | Create a new instance of this container type.                                                                           |
| InputActionsData(InputActionsData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| InputActionsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InputActionsData](InputActionsData). |

## Properties

| Name               | Type                                               | Description |
| ------------------ | -------------------------------------------------- | ----------- |
| nameSid            | string                                             |             |
| conceptIdentifier  | [InputConceptIdentifiers](InputConceptIdentifiers) |             |
| copyKeyBindingFrom | [InputConceptIdentifiers](InputConceptIdentifiers) |             |
| inputActions       | [InputActionData](InputActionData)\[\]             |             |
| hideInKeyBindings  | bool                                               |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [InputActionsData](InputActionsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InputActionsData](InputActionsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
