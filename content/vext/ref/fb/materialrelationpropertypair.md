---
title: MaterialRelationPropertyPair
---

## Summary

### Constructors

|  |
| --- |
| **[MaterialRelationPropertyPair](#constructor-0)**() |
| **[MaterialRelationPropertyPair](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "physicsMaterialProperties" >}} | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)[] |
| {{< prop "physicsPropertyProperties" >}} | [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationPropertyPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialRelationPropertyPair {#constructor-0}

> **MaterialRelationPropertyPair**()

Creates a new [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) frostbite instance.

### MaterialRelationPropertyPair {#constructor-1}

> **MaterialRelationPropertyPair**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "physicsMaterialProperties" %}}

> **[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)**[]

### {{% prop-heading "physicsPropertyProperties" %}}

> **[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)**[]

## Methods

### Clone {#clone}

> **Clone**(): [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) type.

