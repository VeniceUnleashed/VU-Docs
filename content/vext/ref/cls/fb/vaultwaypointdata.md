---
title: VaultWaypointData (Frostbite Container)
---
### Base Classes

[AbstractLocoWaypointData](AbstractLocoWaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| VaultWaypointData()                                                           | Create a new instance of this container type.                                                                              |
| VaultWaypointData(VaultWaypointData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| VaultWaypointData([AbstractLocoWaypointData](AbstractLocoWaypointData) other) | Upcast an instance of type [AbstractLocoWaypointData](AbstractLocoWaypointData) to [VaultWaypointData](VaultWaypointData). |
| VaultWaypointData([WaypointData](WaypointData) other)                         | Upcast an instance of type [WaypointData](WaypointData) to [VaultWaypointData](VaultWaypointData).                         |
| VaultWaypointData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VaultWaypointData](VaultWaypointData).  |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| vaultTask | [AILocoVaultTaskData](AILocoVaultTaskData) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VaultWaypointData](VaultWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VaultWaypointData](VaultWaypointData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
