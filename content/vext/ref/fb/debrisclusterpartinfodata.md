---
title: DebrisClusterPartInfoData
---

## Summary

### Constructors

|  |
| --- |
| **[DebrisClusterPartInfoData](#constructor-0)**() |
| **[DebrisClusterPartInfoData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "angularVelocity" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "linearVelocity" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "numberOfChildren" >}} | int |
| {{< prop "partIndex" >}} | int |
| {{< prop "splitSpeedThreshold" >}} | float |
| {{< prop "inEffectWorldOnly" >}} | bool |
| {{< prop "syncRestPosition" >}} | bool |
| {{< prop "syncContinous" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebrisClusterPartInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebrisClusterPartInfoData {#constructor-0}

> **DebrisClusterPartInfoData**()

Creates a new [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) frostbite instance.

### DebrisClusterPartInfoData {#constructor-1}

> **DebrisClusterPartInfoData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "angularVelocity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "linearVelocity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "numberOfChildren" %}}

> **int**

### {{% prop-heading "partIndex" %}}

> **int**

### {{% prop-heading "splitSpeedThreshold" %}}

> **float**

### {{% prop-heading "inEffectWorldOnly" %}}

> **bool**

### {{% prop-heading "syncRestPosition" %}}

> **bool**

### {{% prop-heading "syncContinous" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebrisClusterPartInfoData](/vext/ref/fb/debrisclusterpartinfodata) type.

