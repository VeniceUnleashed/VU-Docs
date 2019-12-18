---
title: SoldierSpawnTemplateData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSpawnTemplateData()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierSpawnTemplateData(SoldierSpawnTemplateData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierSpawnTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierSpawnTemplateData](SoldierSpawnTemplateData).                                      |
| SoldierSpawnTemplateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierSpawnTemplateData](SoldierSpawnTemplateData). |

## Properties

| Name                 | Type                                                   | Description |
| -------------------- | ------------------------------------------------------ | ----------- |
| customizeSoldierData | [CustomizeSoldierData](CustomizeSoldierData)           |             |
| sensing              | [GameSensingTemplateData](GameSensingTemplateData)     |             |
| behaviour            | [GameBehaviourTemplateData](GameBehaviourTemplateData) |             |
| animationTemplate    | [AnimationSpawnTemplate](AnimationSpawnTemplate)       |             |
| voiceOverLabels      | [VoiceOverLabel](VoiceOverLabel)\[\]                   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierSpawnTemplateData](SoldierSpawnTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierSpawnTemplateData](SoldierSpawnTemplateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
