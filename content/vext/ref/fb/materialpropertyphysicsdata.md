---
title: MaterialPropertyPhysicsData
---

Inherits from [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary

### Constructors

|  |
| --- |
| **[MaterialPropertyPhysicsData](#constructor-0)**() |
| **[MaterialPropertyPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialPropertyPhysicsData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialPropertyPhysicsData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialPropertyPhysicsData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dynamicFrictionModifier" >}} | float |
| {{< prop "staticFrictionModifier" >}} | float |
| {{< prop "restitutionModifier" >}} | float |
| {{< prop "resistance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialPropertyPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialPropertyPhysicsData {#constructor-0}

> **MaterialPropertyPhysicsData**()

Creates a new [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata) frostbite instance.

### MaterialPropertyPhysicsData {#constructor-1}

> **MaterialPropertyPhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialPropertyPhysicsData {#constructor-2}

> **MaterialPropertyPhysicsData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). |

### MaterialPropertyPhysicsData {#constructor-3}

> **MaterialPropertyPhysicsData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). |

### MaterialPropertyPhysicsData {#constructor-4}

> **MaterialPropertyPhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata). |

## Properties

### {{% prop-heading "dynamicFrictionModifier" %}}

> **float**

### {{% prop-heading "staticFrictionModifier" %}}

> **float**

### {{% prop-heading "restitutionModifier" %}}

> **float**

### {{% prop-heading "resistance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata) type.

