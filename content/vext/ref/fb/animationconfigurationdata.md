---
title: AnimationConfigurationData
---


## Summary
### Constructors
| |
| ----------- |
| **[AnimationConfigurationData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "shootModuleData" >}} | [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata) |
| {{< prop "weaponOffsetModuleData" >}} | [WeaponOffsetData](/vext/ref/fb/weaponoffsetdata) \| nil |
| {{< prop "weaponSpeedModuleData" >}} | [WeaponSpeedData](/vext/ref/fb/weaponspeeddata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimationConfigurationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimationConfigurationData {#constructor-0}
> **AnimationConfigurationData**()

Creates a new [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata) frostbite structure.

## Properties
### {{% prop-heading "shootModuleData" %}}
> **[AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata)**

### {{% prop-heading "weaponOffsetModuleData" %}}
> **[WeaponOffsetData](/vext/ref/fb/weaponoffsetdata)** | **nil**

### {{% prop-heading "weaponSpeedModuleData" %}}
> **[WeaponSpeedData](/vext/ref/fb/weaponspeeddata)** | **nil**

## Methods
### Clone
> **Clone**(): [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata) type.

