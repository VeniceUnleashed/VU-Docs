---
title: FakeHingeData
---

Inherits from [FakePhysicsData](/vext/ref/fb/fakephysicsdata)

## Summary

### Constructors

|  |
| --- |
| **[FakeHingeData](#constructor-0)**() |
| **[FakeHingeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FakeHingeData](#constructor-2)**(other: [FakePhysicsData](/vext/ref/fb/fakephysicsdata)) |
| **[FakeHingeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pivot" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "rotationAxis" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "extensionAxis" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "minAngle" >}} | float |
| {{< prop "maxAngle" >}} | float |
| {{< prop "angularDampening" >}} | float |
| {{< prop "pullbackAcceleration" >}} | float |
| {{< prop "progressiveExponent" >}} | float |
| {{< prop "inertiaModifier" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FakeHingeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FakeHingeData {#constructor-0}

> **FakeHingeData**()

Creates a new [FakeHingeData](/vext/ref/fb/fakehingedata) frostbite instance.

### FakeHingeData {#constructor-1}

> **FakeHingeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FakeHingeData](/vext/ref/fb/fakehingedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FakeHingeData {#constructor-2}

> **FakeHingeData**(other: [FakePhysicsData](/vext/ref/fb/fakephysicsdata))

Casts an instance of type [FakePhysicsData](/vext/ref/fb/fakephysicsdata) to [FakeHingeData](/vext/ref/fb/fakehingedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [FakePhysicsData](/vext/ref/fb/fakephysicsdata) | The instance to cast to [FakeHingeData](/vext/ref/fb/fakehingedata). |

### FakeHingeData {#constructor-3}

> **FakeHingeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FakeHingeData](/vext/ref/fb/fakehingedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FakeHingeData](/vext/ref/fb/fakehingedata). |

## Properties

### {{% prop-heading "pivot" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "rotationAxis" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "extensionAxis" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "minAngle" %}}

> **float**

### {{% prop-heading "maxAngle" %}}

> **float**

### {{% prop-heading "angularDampening" %}}

> **float**

### {{% prop-heading "pullbackAcceleration" %}}

> **float**

### {{% prop-heading "progressiveExponent" %}}

> **float**

### {{% prop-heading "inertiaModifier" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FakeHingeData](/vext/ref/fb/fakehingedata) type.

