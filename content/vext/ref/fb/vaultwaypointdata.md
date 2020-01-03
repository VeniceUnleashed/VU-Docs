---
title: VaultWaypointData
---
### Base Classes

[AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| VaultWaypointData()                                                           | Create a new instance of this container type.                                                                              |
| VaultWaypointData(VaultWaypointData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| VaultWaypointData([AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) other) | Upcast an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata/). |
| VaultWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                         | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata/).                         |
| VaultWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata/).  |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| vaultTask | [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VaultWaypointData](/vext/ref/fb/vaultwaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VaultWaypointData](/vext/ref/fb/vaultwaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
