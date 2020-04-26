---
title: AntAnimationHandlerData
---

## Summary

### Constructors

|  |
| --- |
| **[AntAnimationHandlerData](#constructor-0)**() |
| **[AntAnimationHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animatable" >}} | [AntAnimatableData](/vext/ref/fb/antanimatabledata) |
| {{< prop "rootController" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "lodBinding" >}} | [LodBinding](/vext/ref/fb/lodbinding) |
| {{< prop "antPackageData" >}} | [AntPackageAsset](/vext/ref/fb/antpackageasset)[] |
| {{< prop "bonesToMirror" >}} | [GameplayBone](/vext/ref/fb/gameplaybone)[] |
| {{< prop "reportBackFromAnt" >}} | bool |
| {{< prop "enableMasterSlaveCopy" >}} | bool |
| {{< prop "isProp" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntAnimationHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntAnimationHandlerData {#constructor-0}

> **AntAnimationHandlerData**()

Creates a new [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata) frostbite instance.

### AntAnimationHandlerData {#constructor-1}

> **AntAnimationHandlerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "animatable" %}}

> **[AntAnimatableData](/vext/ref/fb/antanimatabledata)**

### {{% prop-heading "rootController" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "lodBinding" %}}

> **[LodBinding](/vext/ref/fb/lodbinding)**

### {{% prop-heading "antPackageData" %}}

> **[AntPackageAsset](/vext/ref/fb/antpackageasset)**[]

### {{% prop-heading "bonesToMirror" %}}

> **[GameplayBone](/vext/ref/fb/gameplaybone)**[]

### {{% prop-heading "reportBackFromAnt" %}}

> **bool**

### {{% prop-heading "enableMasterSlaveCopy" %}}

> **bool**

### {{% prop-heading "isProp" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata) type.

