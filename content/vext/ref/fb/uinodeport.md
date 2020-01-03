---
title: UINodePort
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| UINodePort()                                                          | Create a new instance of this container type.                                                               |
| UINodePort(UINodePort other)                                          | Create a reference copy of an instance of the same type.                                                    |
| UINodePort([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodePort](/vext/ref/fb/uinodeport/). |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| name              | string                             |             |
| instanceName      | string                             |             |
| query             | [UIWidgetEventID](/vext/ref/fb/uiwidgeteventid/) |             |
| allowManualRemove | bool                               |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [UINodePort](/vext/ref/fb/uinodeport/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINodePort](/vext/ref/fb/uinodeport/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
