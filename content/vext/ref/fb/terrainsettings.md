---
title: TerrainSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| TerrainSettings()                                                          | Create a new instance of this container type.                                                                         |
| TerrainSettings(TerrainSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| TerrainSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainSettings](TerrainSettings). |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| heightQueryCacheSize     | number |             |
| modifiersCapacity        | number |             |
| intersectingModifiersMax | number |             |
| modifierDepthFactor      | number |             |
| modifierSlopeMax         | number |             |
| modifiersEnable          | bool   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainSettings](TerrainSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainSettings](TerrainSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
