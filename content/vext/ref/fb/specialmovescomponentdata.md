---
title: SpecialMovesComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SpecialMovesComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SpecialMovesComponentData(SpecialMovesComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SpecialMovesComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/).                      |
| SpecialMovesComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/).                    |
| SpecialMovesComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/).              |
| SpecialMovesComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/). |

## Properties

| Name                          | Type                                                               | Description |
| ----------------------------- | ------------------------------------------------------------------ | ----------- |
| vaultOverHighState            | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| vaultUpHighState              | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| vaultOverLowState             | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| sprintToProneState            | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| deathState                    | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| specialAnimationState         | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)                       |             |
| indexedDeathStates            | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)\[\]                   |             |
| indexedSpecialAnimationStates | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/)\[\]                   |             |
| indexedVaultOverHighStates    | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria/)\[\] |             |
| indexedVaultUpStates          | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria/)\[\] |             |
| indexedVaultOverLowStates     | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria/)\[\] |             |
| binding                       | [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding/)                         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
