---
title: EffectManagerSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EffectManagerSettings()                                                          | Create a new instance of this container type.                                                                                     |
| EffectManagerSettings(EffectManagerSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EffectManagerSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings/).                    |
| EffectManagerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings/). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| maxNewEffectsPerFrameCount    | number |             |
| sizeToGrowNewEffectsContainer | number |             |
| effectQuality                 | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EffectManagerSettings](/vext/ref/fb/effectmanagersettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectManagerSettings](/vext/ref/fb/effectmanagersettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
