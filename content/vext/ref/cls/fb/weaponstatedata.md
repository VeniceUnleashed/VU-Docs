---
title: WeaponStateData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| WeaponStateData()                      | Create a new instance of this structure type.            |
| WeaponStateData(WeaponStateData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                                  | Type                                                        | Description |
| ------------------------------------- | ----------------------------------------------------------- | ----------- |
| referencedAssetHashes                 | number\[\]                                                  |             |
| boneFakePhysics                       | [BoneFakePhysicsData](BoneFakePhysicsData)\[\]              |             |
| mesh1p                                | [SkinnedMeshAsset](SkinnedMeshAsset)                        |             |
| meshZoom1p                            | [SkinnedMeshAsset](SkinnedMeshAsset)                        |             |
| mesh3p                                | [SkinnedMeshAsset](SkinnedMeshAsset)                        |             |
| weapon                                | [AntRef](AntRef)                                            |             |
| zoomMeshTransitionFactor              | number                                                      |             |
| zoomScaleFactor                       | number                                                      |             |
| zoomInOutMeshTransitionFactors        | number\[\]                                                  |             |
| zoomedScopeFilter                     | [ScopeFilterData](ScopeFilterData)                          |             |
| nonZoomedScopeFilter                  | [ScopeFilterData](ScopeFilterData)                          |             |
| keepAimingTime                        | number                                                      |             |
| animationConfiguration                | [AnimationConfigurationData](AnimationConfigurationData)    |             |
| animatedFireType                      | [AnimatedFireEnum](AnimatedFireEnum)                        |             |
| animatedAimingType                    | [AnimatedAimingEnum](AnimatedAimingEnum)                    |             |
| mesh3pTransforms                      | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |
| mesh3pRigidMeshSocketObjectTransforms | [RigidMeshSocketTransform](RigidMeshSocketTransform)\[\]    |             |
| hideProjectileAfterFireTime           | number                                                      |             |
| projectileBoneName                    | string                                                      |             |
| isOneHanded                           | bool                                                        |             |
| playDeployAfterFire                   | bool                                                        |             |
| skipFireAnimation                     | bool                                                        |             |
| skipDeployAnimation                   | bool                                                        |             |
| skipReloadAnimation                   | bool                                                        |             |
| alwaysAimHead                         | bool                                                        |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [WeaponStateData](WeaponStateData) | [Clone](#clone) |            |

### Clone

> [WeaponStateData](WeaponStateData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
