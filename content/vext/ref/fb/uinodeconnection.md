---
title: UINodeConnection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UINodeConnection()                                                          | Create a new instance of this container type.                                                                           |
| UINodeConnection(UINodeConnection other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UINodeConnection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodeConnection](/vext/ref/fb/uinodeconnection/). |

## Properties

| Name            | Type                     | Description |
| --------------- | ------------------------ | ----------- |
| sourceNode      | [UINodeData](/vext/ref/fb/uinodedata/) |             |
| targetNode      | [UINodeData](/vext/ref/fb/uinodedata/) |             |
| sourcePort      | [UINodePort](/vext/ref/fb/uinodeport/) |             |
| targetPort      | [UINodePort](/vext/ref/fb/uinodeport/) |             |
| numScreensToPop | number                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UINodeConnection](/vext/ref/fb/uinodeconnection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINodeConnection](/vext/ref/fb/uinodeconnection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
