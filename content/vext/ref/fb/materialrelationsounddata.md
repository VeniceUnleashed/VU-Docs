---
title: MaterialRelationSoundData
---

Inherits from [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary

### Constructors

|  |
| --- |
| **[MaterialRelationSoundData](#constructor-0)**() |
| **[MaterialRelationSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialRelationSoundData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialRelationSoundData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialRelationSoundData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "impactSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "scrapeSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "scrapeLength" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialRelationSoundData {#constructor-0}

> **MaterialRelationSoundData**()

Creates a new [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata) frostbite instance.

### MaterialRelationSoundData {#constructor-1}

> **MaterialRelationSoundData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialRelationSoundData {#constructor-2}

> **MaterialRelationSoundData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). |

### MaterialRelationSoundData {#constructor-3}

> **MaterialRelationSoundData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). |

### MaterialRelationSoundData {#constructor-4}

> **MaterialRelationSoundData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata). |

## Properties

### {{% prop-heading "impactSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "scrapeSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "scrapeLength" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata) type.

