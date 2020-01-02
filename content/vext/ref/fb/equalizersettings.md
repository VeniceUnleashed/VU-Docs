---
title: EqualizerSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| EqualizerSettings()                                                          | Create a new instance of this container type.                                                                             |
| EqualizerSettings(EqualizerSettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| EqualizerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EqualizerSettings](EqualizerSettings). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| lowShelfFrequency  | number |             |
| lowShelfGain       | number |             |
| highShelfFrequency | number |             |
| highShelfGain      | number |             |
| hpCutoffFrequency  | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [EqualizerSettings](EqualizerSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EqualizerSettings](EqualizerSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
