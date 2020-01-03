---
title: WeaponStateData
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
| boneFakePhysics                       | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/)\[\]              |             |
| mesh1p                                | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)                        |             |
| meshZoom1p                            | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)                        |             |
| mesh3p                                | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)                        |             |
| weapon                                | [AntRef](/vext/ref/fb/antref/)                                            |             |
| zoomMeshTransitionFactor              | number                                                      |             |
| zoomScaleFactor                       | number                                                      |             |
| zoomInOutMeshTransitionFactors        | number\[\]                                                  |             |
| zoomedScopeFilter                     | [ScopeFilterData](/vext/ref/fb/scopefilterdata/)                          |             |
| nonZoomedScopeFilter                  | [ScopeFilterData](/vext/ref/fb/scopefilterdata/)                          |             |
| keepAimingTime                        | number                                                      |             |
| animationConfiguration                | [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata/)    |             |
| animatedFireType                      | [AnimatedFireEnum](/vext/ref/fb/animatedfireenum/)                        |             |
| animatedAimingType                    | [AnimatedAimingEnum](/vext/ref/fb/animatedaimingenum/)                    |             |
| mesh3pTransforms                      | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| mesh3pRigidMeshSocketObjectTransforms | [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform/)\[\]    |             |
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
| [WeaponStateData](/vext/ref/fb/weaponstatedata/) | [Clone](#clone) |            |

### Clone

> [WeaponStateData](/vext/ref/fb/weaponstatedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
