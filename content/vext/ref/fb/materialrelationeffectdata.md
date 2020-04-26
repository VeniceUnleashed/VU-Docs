---
title: MaterialRelationEffectData
---

Inherits from [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary

### Constructors

|  |
| --- |
| **[MaterialRelationEffectData](#constructor-0)**() |
| **[MaterialRelationEffectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialRelationEffectData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialRelationEffectData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialRelationEffectData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "impactEffects" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint)[] |
| {{< prop "impactDebris" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint)[] |
| {{< prop "impactEffectMaxSpreadAngle" >}} | float |
| {{< prop "mirrorImpactDirection" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialRelationEffectData {#constructor-0}

> **MaterialRelationEffectData**()

Creates a new [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata) frostbite instance.

### MaterialRelationEffectData {#constructor-1}

> **MaterialRelationEffectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialRelationEffectData {#constructor-2}

> **MaterialRelationEffectData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). |

### MaterialRelationEffectData {#constructor-3}

> **MaterialRelationEffectData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). |

### MaterialRelationEffectData {#constructor-4}

> **MaterialRelationEffectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata). |

## Properties

### {{% prop-heading "impactEffects" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)**[]

### {{% prop-heading "impactDebris" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)**[]

### {{% prop-heading "impactEffectMaxSpreadAngle" %}}

> **float**

### {{% prop-heading "mirrorImpactDirection" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata) type.

