---
title: WeaponStateData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponStateData](#constructor-0)**() |
| **[WeaponStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "referencedAssetHashes" >}} | int[] |
| {{< prop "boneFakePhysics" >}} | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)[] |
| {{< prop "mesh1p" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "meshZoom1p" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "mesh3p" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "weapon" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "zoomMeshTransitionFactor" >}} | float |
| {{< prop "zoomScaleFactor" >}} | float |
| {{< prop "zoomInOutMeshTransitionFactors" >}} | float[] |
| {{< prop "zoomedScopeFilter" >}} | [ScopeFilterData](/vext/ref/fb/scopefilterdata) \| nil |
| {{< prop "nonZoomedScopeFilter" >}} | [ScopeFilterData](/vext/ref/fb/scopefilterdata) \| nil |
| {{< prop "keepAimingTime" >}} | float |
| {{< prop "animationConfiguration" >}} | [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata) |
| {{< prop "animatedFireType" >}} | [AnimatedFireEnum](/vext/ref/fb/animatedfireenum) |
| {{< prop "animatedAimingType" >}} | [AnimatedAimingEnum](/vext/ref/fb/animatedaimingenum) |
| {{< prop "mesh3pTransforms" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |
| {{< prop "mesh3pRigidMeshSocketObjectTransforms" >}} | [RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)[] |
| {{< prop "hideProjectileAfterFireTime" >}} | float |
| {{< prop "projectileBoneName" >}} | string |
| {{< prop "isOneHanded" >}} | bool |
| {{< prop "playDeployAfterFire" >}} | bool |
| {{< prop "skipFireAnimation" >}} | bool |
| {{< prop "skipDeployAnimation" >}} | bool |
| {{< prop "skipReloadAnimation" >}} | bool |
| {{< prop "alwaysAimHead" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponStateData](/vext/ref/fb/weaponstatedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponStateData {#constructor-0}

> **WeaponStateData**()

Creates a new [WeaponStateData](/vext/ref/fb/weaponstatedata) frostbite instance.

### WeaponStateData {#constructor-1}

> **WeaponStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponStateData](/vext/ref/fb/weaponstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "referencedAssetHashes" %}}

> **int**[]

### {{% prop-heading "boneFakePhysics" %}}

> **[BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)**[]

### {{% prop-heading "mesh1p" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "meshZoom1p" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "mesh3p" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "weapon" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "zoomMeshTransitionFactor" %}}

> **float**

### {{% prop-heading "zoomScaleFactor" %}}

> **float**

### {{% prop-heading "zoomInOutMeshTransitionFactors" %}}

> **float**[]

### {{% prop-heading "zoomedScopeFilter" %}}

> **[ScopeFilterData](/vext/ref/fb/scopefilterdata)** \| **nil**

### {{% prop-heading "nonZoomedScopeFilter" %}}

> **[ScopeFilterData](/vext/ref/fb/scopefilterdata)** \| **nil**

### {{% prop-heading "keepAimingTime" %}}

> **float**

### {{% prop-heading "animationConfiguration" %}}

> **[AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata)**

### {{% prop-heading "animatedFireType" %}}

> **[AnimatedFireEnum](/vext/ref/fb/animatedfireenum)**

### {{% prop-heading "animatedAimingType" %}}

> **[AnimatedAimingEnum](/vext/ref/fb/animatedaimingenum)**

### {{% prop-heading "mesh3pTransforms" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

### {{% prop-heading "mesh3pRigidMeshSocketObjectTransforms" %}}

> **[RigidMeshSocketTransform](/vext/ref/fb/rigidmeshsockettransform)**[]

### {{% prop-heading "hideProjectileAfterFireTime" %}}

> **float**

### {{% prop-heading "projectileBoneName" %}}

> **string**

### {{% prop-heading "isOneHanded" %}}

> **bool**

### {{% prop-heading "playDeployAfterFire" %}}

> **bool**

### {{% prop-heading "skipFireAnimation" %}}

> **bool**

### {{% prop-heading "skipDeployAnimation" %}}

> **bool**

### {{% prop-heading "skipReloadAnimation" %}}

> **bool**

### {{% prop-heading "alwaysAimHead" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponStateData](/vext/ref/fb/weaponstatedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponStateData](/vext/ref/fb/weaponstatedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponStateData](/vext/ref/fb/weaponstatedata) type.

