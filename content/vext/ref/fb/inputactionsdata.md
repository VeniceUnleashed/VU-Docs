---
title: InputActionsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| InputActionsData()                                                          | Create a new instance of this container type.                                                                           |
| InputActionsData(InputActionsData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| InputActionsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputActionsData](/vext/ref/fb/inputactionsdata/). |

## Properties

| Name               | Type                                               | Description |
| ------------------ | -------------------------------------------------- | ----------- |
| nameSid            | string                                             |             |
| conceptIdentifier  | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers/) |             |
| copyKeyBindingFrom | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers/) |             |
| inputActions       | [InputActionData](/vext/ref/fb/inputactiondata/)\[\]             |             |
| hideInKeyBindings  | bool                                               |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [InputActionsData](/vext/ref/fb/inputactionsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputActionsData](/vext/ref/fb/inputactionsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
