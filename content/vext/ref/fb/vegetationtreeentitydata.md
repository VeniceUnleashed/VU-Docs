---
title: VegetationTreeEntityData
---
### Base Classes

[VegetationBaseEntityData](VegetationBaseEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                              |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| VegetationTreeEntityData()                                                           | Create a new instance of this container type.                                                                                            |
| VegetationTreeEntityData(VegetationTreeEntityData other)                             | Create a reference copy of an instance of the same type.                                                                                 |
| VegetationTreeEntityData([VegetationBaseEntityData](VegetationBaseEntityData) other) | Upcast an instance of type [VegetationBaseEntityData](VegetationBaseEntityData) to [VegetationTreeEntityData](VegetationTreeEntityData). |
| VegetationTreeEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [VegetationTreeEntityData](VegetationTreeEntityData).                     |
| VegetationTreeEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VegetationTreeEntityData](VegetationTreeEntityData).               |
| VegetationTreeEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [VegetationTreeEntityData](VegetationTreeEntityData).                             |
| VegetationTreeEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [VegetationTreeEntityData](VegetationTreeEntityData).                     |
| VegetationTreeEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VegetationTreeEntityData](VegetationTreeEntityData).               |
| VegetationTreeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationTreeEntityData](VegetationTreeEntityData).  |

## Properties

| Name                      | Type                               | Description |
| ------------------------- | ---------------------------------- | ----------- |
| groundImpactEffect        | [EffectBlueprint](EffectBlueprint) |             |
| stemRipEffect             | [EffectBlueprint](EffectBlueprint) |             |
| stemPhysicsWidth          | number                             |             |
| coliPlaneDepth            | number                             |             |
| stemHitpoints             | number                             |             |
| branchHitpoints           | number                             |             |
| branchL2Hitpoints         | number                             |             |
| stemStiffness             | number                             |             |
| stemStiffnessSpread       | number                             |             |
| branchStiffness           | number                             |             |
| branchStiffnessL2         | number                             |             |
| stemBoneCount             | number                             |             |
| windStem                  | number                             |             |
| windBranch                | number                             |             |
| windBranchL2              | number                             |             |
| treeFallEffect            | [EffectBlueprint](EffectBlueprint) |             |
| breakableJointThreshold   | number                             |             |
| fallDirectionEnd          | number                             |             |
| localWindEffect           | [EffectBlueprint](EffectBlueprint) |             |
| impactThreshold           | number                             |             |
| collisionImpactMultiplier | number                             |             |
| fallDirectionStart        | number                             |             |
| splashDistantEffect       | [EffectBlueprint](EffectBlueprint) |             |
| bulletImpactEffect        | [EffectBlueprint](EffectBlueprint) |             |
| partsTimeToLive           | number                             |             |
| shadowLODOffset           | number                             |             |
| splashNearEffect          | [EffectBlueprint](EffectBlueprint) |             |
| collisionEffect           | [EffectBlueprint](EffectBlueprint) |             |
| forceFullSim              | bool                               |             |
| useImpactThreshold        | bool                               |             |
| usePhysicsShapes          | bool                               |             |
| constraintStemB1          | bool                               |             |
| constraintStemB2          | bool                               |             |
| clientSideOnly            | bool                               |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VegetationTreeEntityData](VegetationTreeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VegetationTreeEntityData](VegetationTreeEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
