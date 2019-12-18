---
title: TerrainSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| TerrainSettings()                                                          | Create a new instance of this container type.                                                                         |
| TerrainSettings(TerrainSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| TerrainSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TerrainSettings](TerrainSettings). |

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
| [TerrainSettings](TerrainSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TerrainSettings](TerrainSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
