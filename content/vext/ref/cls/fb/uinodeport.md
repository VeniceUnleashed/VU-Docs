---
title: UINodePort (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| UINodePort()                                                          | Create a new instance of this container type.                                                               |
| UINodePort(UINodePort other)                                          | Create a reference copy of an instance of the same type.                                                    |
| UINodePort([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UINodePort](UINodePort). |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| name              | string                             |             |
| instanceName      | string                             |             |
| query             | [UIWidgetEventID](UIWidgetEventID) |             |
| allowManualRemove | bool                               |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [UINodePort](UINodePort) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UINodePort](UINodePort) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
