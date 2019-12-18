---
title: VeniceUISettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VeniceUISettings()                                                          | Create a new instance of this container type.                                                                           |
| VeniceUISettings(VeniceUISettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| VeniceUISettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [VeniceUISettings](VeniceUISettings).                    |
| VeniceUISettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceUISettings](VeniceUISettings). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| metaDataAssetPath    | string |             |
| getStatsInOnlineFlow | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceUISettings](VeniceUISettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceUISettings](VeniceUISettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
