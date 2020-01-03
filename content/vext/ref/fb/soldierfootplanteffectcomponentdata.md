---
title: SoldierFootplantEffectComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierFootplantEffectComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| SoldierFootplantEffectComponentData(SoldierFootplantEffectComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| SoldierFootplantEffectComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/).                      |
| SoldierFootplantEffectComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/).                    |
| SoldierFootplantEffectComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/).              |
| SoldierFootplantEffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/). |

## Properties

| Name                      | Type                                           | Description |
| ------------------------- | ---------------------------------------------- | ----------- |
| footMaterialPair          | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| heightOverGroundThreshold | number                                         |             |
| footVelocityThreshold     | number                                         |             |
| lodDistance               | number                                         |             |
| fullFootplantingEnabled   | bool                                           |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierFootplantEffectComponentData](/vext/ref/fb/soldierfootplanteffectcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
