---
title: EntityBusData
---
### Base Classes

[DataBusData](/vext/ref/fb/databusdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| EntityBusData()                                                          | Create a new instance of this container type.                                                                     |
| EntityBusData(EntityBusData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| EntityBusData([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [EntityBusData](/vext/ref/fb/entitybusdata/).                          |
| EntityBusData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EntityBusData](/vext/ref/fb/entitybusdata/).                                      |
| EntityBusData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityBusData](/vext/ref/fb/entitybusdata/). |

## Properties

| Name                        | Type                                               | Description |
| --------------------------- | -------------------------------------------------- | ----------- |
| eventConnections            | [EventConnection](/vext/ref/fb/eventconnection/)\[\]             |             |
| descriptor                  | [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/) |             |
| needNetworkId               | bool                                               |             |
| interfaceHasConnections     | bool                                               |             |
| alwaysCreateEntityBusClient | bool                                               |             |
| alwaysCreateEntityBusServer | bool                                               |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [EntityBusData](/vext/ref/fb/entitybusdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntityBusData](/vext/ref/fb/entitybusdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
