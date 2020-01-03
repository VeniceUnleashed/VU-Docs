---
title: ModelAnimationEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ModelAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| ModelAnimationEntityData(ModelAnimationEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ModelAnimationEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/).                            |
| ModelAnimationEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/).                    |
| ModelAnimationEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/).              |
| ModelAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/). |

## Properties

| Name                            | Type                                                       | Description |
| ------------------------------- | ---------------------------------------------------------- | ----------- |
| animationEntitySpace            | [LinearTransform](/vext/ref/shared/class/lineartransform)    |             |
| boneToPlace                     | [GameplayBones](/vext/ref/fb/gameplaybones/)                             |             |
| realm                           | [Realm](/vext/ref/fb/realm/)                                             |             |
| modelAnimationTransformType     | [ModelAnimationTransformType](/vext/ref/fb/modelanimationtransformtype/) |             |
| instanceSeed                    | number                                                     |             |
| defaultAnimation                | string                                                     |             |
| animationIndex                  | number                                                     |             |
| animationSet                    | [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset/)               |             |
| externalTime                    | number                                                     |             |
| rootMeshBoneName                | string                                                     |             |
| jointWorldTransformUpdateOrder  | [ModelAnimationUpdateOrder](/vext/ref/fb/modelanimationupdateorder/)     |             |
| connectBoneName                 | string                                                     |             |
| jointOutputPropertyIds          | number\[\]                                                 |             |
| trajectoryBoneName              | string                                                     |             |
| animationEntitySpaceActive      | bool                                                       |             |
| playFirstFrame                  | bool                                                       |             |
| looping                         | bool                                                       |             |
| enableJointWorldTransformOutput | bool                                                       |             |
| resetAfterStop                  | bool                                                       |             |
| autoStart                       | bool                                                       |             |
| showDebugTransforms             | bool                                                       |             |
| applyRotationCompensation       | bool                                                       |             |
| applyPreTransformation          | bool                                                       |             |
| disableCulling                  | bool                                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
