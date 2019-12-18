---
title: EntityBusData (Frostbite Container)
---
### Base Classes

[DataBusData](DataBusData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| EntityBusData()                                                          | Create a new instance of this container type.                                                                     |
| EntityBusData(EntityBusData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| EntityBusData([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [EntityBusData](EntityBusData).                          |
| EntityBusData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EntityBusData](EntityBusData).                                      |
| EntityBusData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntityBusData](EntityBusData). |

## Properties

| Name                        | Type                                               | Description |
| --------------------------- | -------------------------------------------------- | ----------- |
| eventConnections            | [EventConnection](EventConnection)\[\]             |             |
| descriptor                  | [InterfaceDescriptorData](InterfaceDescriptorData) |             |
| needNetworkId               | bool                                               |             |
| interfaceHasConnections     | bool                                               |             |
| alwaysCreateEntityBusClient | bool                                               |             |
| alwaysCreateEntityBusServer | bool                                               |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [EntityBusData](EntityBusData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntityBusData](EntityBusData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
