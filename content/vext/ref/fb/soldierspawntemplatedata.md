---
title: SoldierSpawnTemplateData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSpawnTemplateData()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierSpawnTemplateData(SoldierSpawnTemplateData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierSpawnTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/).                                      |
| SoldierSpawnTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/). |

## Properties

| Name                 | Type                                                   | Description |
| -------------------- | ------------------------------------------------------ | ----------- |
| customizeSoldierData | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/)           |             |
| sensing              | [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/)     |             |
| behaviour            | [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/) |             |
| animationTemplate    | [AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate/)       |             |
| voiceOverLabels      | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\]                   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
