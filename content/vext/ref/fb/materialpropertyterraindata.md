---
title: MaterialPropertyTerrainData
---

Inherits from [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary

### Constructors

|  |
| --- |
| **[MaterialPropertyTerrainData](#constructor-0)**() |
| **[MaterialPropertyTerrainData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialPropertyTerrainData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialPropertyTerrainData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialPropertyTerrainData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dirtTriggerColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "destructionEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "dirtTriggerFactor" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialPropertyTerrainData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialPropertyTerrainData {#constructor-0}

> **MaterialPropertyTerrainData**()

Creates a new [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata) frostbite instance.

### MaterialPropertyTerrainData {#constructor-1}

> **MaterialPropertyTerrainData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialPropertyTerrainData {#constructor-2}

> **MaterialPropertyTerrainData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). |

### MaterialPropertyTerrainData {#constructor-3}

> **MaterialPropertyTerrainData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). |

### MaterialPropertyTerrainData {#constructor-4}

> **MaterialPropertyTerrainData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata). |

## Properties

### {{% prop-heading "dirtTriggerColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "destructionEffect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

### {{% prop-heading "dirtTriggerFactor" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata) type.

