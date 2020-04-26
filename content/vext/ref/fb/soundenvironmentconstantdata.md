---
title: SoundEnvironmentConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SoundEnvironmentConstantData](#constructor-0)**() |
| **[SoundEnvironmentConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundEnvironmentConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundEnvironmentConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "humanPlayerSoldierMovementVolumeOverride" >}} | float |
| {{< prop "memoryTime" >}} | float |
| {{< prop "minimumLoudness" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundEnvironmentConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundEnvironmentConstantData {#constructor-0}

> **SoundEnvironmentConstantData**()

Creates a new [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) frostbite instance.

### SoundEnvironmentConstantData {#constructor-1}

> **SoundEnvironmentConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundEnvironmentConstantData {#constructor-2}

> **SoundEnvironmentConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). |

### SoundEnvironmentConstantData {#constructor-3}

> **SoundEnvironmentConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). |

## Properties

### {{% prop-heading "humanPlayerSoldierMovementVolumeOverride" %}}

> **float**

### {{% prop-heading "memoryTime" %}}

> **float**

### {{% prop-heading "minimumLoudness" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) type.

