---
title: AntAnimatableData
---

## Summary

### Constructors

|  |
| --- |
| **[AntAnimatableData](#constructor-0)**() |
| **[AntAnimatableData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actor" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "proceduralAwareness" >}} | [ProceduralAwarenessAntRefs](/vext/ref/fb/proceduralawarenessantrefs) \| nil |
| {{< prop "rightHandEffectorDisableOverride" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "leftHandEffectorDisableOverride" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "masterSkeletonAsset" >}} | [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AntAnimatableData](/vext/ref/fb/antanimatabledata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntAnimatableData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntAnimatableData {#constructor-0}

> **AntAnimatableData**()

Creates a new [AntAnimatableData](/vext/ref/fb/antanimatabledata) frostbite instance.

### AntAnimatableData {#constructor-1}

> **AntAnimatableData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntAnimatableData](/vext/ref/fb/antanimatabledata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "actor" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "proceduralAwareness" %}}

> **[ProceduralAwarenessAntRefs](/vext/ref/fb/proceduralawarenessantrefs)** \| **nil**

### {{% prop-heading "rightHandEffectorDisableOverride" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "leftHandEffectorDisableOverride" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "masterSkeletonAsset" %}}

> **[MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [AntAnimatableData](/vext/ref/fb/antanimatabledata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AntAnimatableData](/vext/ref/fb/antanimatabledata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntAnimatableData](/vext/ref/fb/antanimatabledata) type.

