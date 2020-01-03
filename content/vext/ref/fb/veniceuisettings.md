---
title: VeniceUISettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VeniceUISettings()                                                          | Create a new instance of this container type.                                                                           |
| VeniceUISettings(VeniceUISettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| VeniceUISettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [VeniceUISettings](/vext/ref/fb/veniceuisettings/).                    |
| VeniceUISettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUISettings](/vext/ref/fb/veniceuisettings/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| metaDataAssetPath    | string |             |
| getStatsInOnlineFlow | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceUISettings](/vext/ref/fb/veniceuisettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUISettings](/vext/ref/fb/veniceuisettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
