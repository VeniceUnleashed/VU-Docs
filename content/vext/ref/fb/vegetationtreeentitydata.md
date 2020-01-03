---
title: VegetationTreeEntityData
---
### Base Classes

[VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                              |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| VegetationTreeEntityData()                                                           | Create a new instance of this container type.                                                                                            |
| VegetationTreeEntityData(VegetationTreeEntityData other)                             | Create a reference copy of an instance of the same type.                                                                                 |
| VegetationTreeEntityData([VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/) other) | Upcast an instance of type [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/). |
| VegetationTreeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).                     |
| VegetationTreeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).               |
| VegetationTreeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).                             |
| VegetationTreeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).                     |
| VegetationTreeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).               |
| VegetationTreeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/).  |

## Properties

| Name                      | Type                               | Description |
| ------------------------- | ---------------------------------- | ----------- |
| groundImpactEffect        | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| stemRipEffect             | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
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
| treeFallEffect            | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| breakableJointThreshold   | number                             |             |
| fallDirectionEnd          | number                             |             |
| localWindEffect           | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| impactThreshold           | number                             |             |
| collisionImpactMultiplier | number                             |             |
| fallDirectionStart        | number                             |             |
| splashDistantEffect       | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| bulletImpactEffect        | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| partsTimeToLive           | number                             |             |
| shadowLODOffset           | number                             |             |
| splashNearEffect          | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| collisionEffect           | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| forceFullSim              | bool                               |             |
| useImpactThreshold        | bool                               |             |
| usePhysicsShapes          | bool                               |             |
| constraintStemB1          | bool                               |             |
| constraintStemB2          | bool                               |             |
| clientSideOnly            | bool                               |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
