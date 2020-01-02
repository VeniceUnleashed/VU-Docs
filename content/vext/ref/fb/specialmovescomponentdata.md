---
title: SpecialMovesComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SpecialMovesComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SpecialMovesComponentData(SpecialMovesComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SpecialMovesComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SpecialMovesComponentData](SpecialMovesComponentData).                      |
| SpecialMovesComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpecialMovesComponentData](SpecialMovesComponentData).                    |
| SpecialMovesComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpecialMovesComponentData](SpecialMovesComponentData).              |
| SpecialMovesComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpecialMovesComponentData](SpecialMovesComponentData). |

## Properties

| Name                          | Type                                                               | Description |
| ----------------------------- | ------------------------------------------------------------------ | ----------- |
| vaultOverHighState            | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| vaultUpHighState              | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| vaultOverLowState             | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| sprintToProneState            | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| deathState                    | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| specialAnimationState         | [SpecialMoveStateData](SpecialMoveStateData)                       |             |
| indexedDeathStates            | [SpecialMoveStateData](SpecialMoveStateData)\[\]                   |             |
| indexedSpecialAnimationStates | [SpecialMoveStateData](SpecialMoveStateData)\[\]                   |             |
| indexedVaultOverHighStates    | [SpecialMoveVaultStateCriteria](SpecialMoveVaultStateCriteria)\[\] |             |
| indexedVaultUpStates          | [SpecialMoveVaultStateCriteria](SpecialMoveVaultStateCriteria)\[\] |             |
| indexedVaultOverLowStates     | [SpecialMoveVaultStateCriteria](SpecialMoveVaultStateCriteria)\[\] |             |
| binding                       | [SpecialMovesBinding](SpecialMovesBinding)                         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpecialMovesComponentData](SpecialMovesComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpecialMovesComponentData](SpecialMovesComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
