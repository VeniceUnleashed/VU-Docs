---
title: SoundAreaEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SoundAreaEntityData](#constructor-0)**() |
| **[SoundAreaEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundAreaEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SoundAreaEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoundAreaEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoundAreaEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "bigWorld" >}} | [BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset) \| nil |
| {{< prop "fadeWidth" >}} | float |
| {{< prop "proximityMultiplier" >}} | float |
| {{< prop "fadeCurve" >}} | [FadeCurveType](/vext/ref/fb/fadecurvetype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundAreaEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundAreaEntityData {#constructor-0}
> **SoundAreaEntityData**()

Creates a new [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata) frostbite instance.

### SoundAreaEntityData {#constructor-1}
> **SoundAreaEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundAreaEntityData {#constructor-2}
> **SoundAreaEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). |

### SoundAreaEntityData {#constructor-3}
> **SoundAreaEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). |

### SoundAreaEntityData {#constructor-4}
> **SoundAreaEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). |

### SoundAreaEntityData {#constructor-5}
> **SoundAreaEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata). |

## Properties
### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "bigWorld" %}}
> **[BigWorldSettingsAsset](/vext/ref/fb/bigworldsettingsasset)** | **nil**

### {{% prop-heading "fadeWidth" %}}
> **float**

### {{% prop-heading "proximityMultiplier" %}}
> **float**

### {{% prop-heading "fadeCurve" %}}
> **[FadeCurveType](/vext/ref/fb/fadecurvetype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundAreaEntityData](/vext/ref/fb/soundareaentitydata) type.

