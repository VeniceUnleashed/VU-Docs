---
title: MaterialPropertySoundData
---

Inherits from 
[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary
### Constructors
| |
| ----------- |
| **[MaterialPropertySoundData](#constructor-0)**() |
| **[MaterialPropertySoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MaterialPropertySoundData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialPropertySoundData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialPropertySoundData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "impactSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "scrapeSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "scrapeLength" >}} | float |
| {{< prop "soldierSettings" >}} | [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings) \| nil |
| {{< prop "softness" >}} | float |
| {{< prop "materialSoundId" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MaterialPropertySoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MaterialPropertySoundData {#constructor-0}
> **MaterialPropertySoundData**()

Creates a new [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata) frostbite instance.

### MaterialPropertySoundData {#constructor-1}
> **MaterialPropertySoundData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MaterialPropertySoundData {#constructor-2}
> **MaterialPropertySoundData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). |

### MaterialPropertySoundData {#constructor-3}
> **MaterialPropertySoundData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). |

### MaterialPropertySoundData {#constructor-4}
> **MaterialPropertySoundData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata). |

## Properties
### {{% prop-heading "impactSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "scrapeSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "scrapeLength" %}}
> **float**

### {{% prop-heading "soldierSettings" %}}
> **[MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings)** | **nil**

### {{% prop-heading "softness" %}}
> **float**

### {{% prop-heading "materialSoundId" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata) type.

