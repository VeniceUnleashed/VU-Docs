---
title: MixerPresetGroupData
---


## Summary
### Constructors
| |
| ----------- |
| **[MixerPresetGroupData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "group" >}} | [MixGroup](/vext/ref/fb/mixgroup) \| nil |
| {{< prop "state" >}} | [MixGroupState](/vext/ref/fb/mixgroupstate) |
| {{< prop "attackTime" >}} | float |
| {{< prop "releaseTime" >}} | float |
| {{< prop "properties" >}} | [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)[] |
| {{< prop "isDominant" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerPresetGroupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerPresetGroupData {#constructor-0}
> **MixerPresetGroupData**()

Creates a new [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) frostbite structure.

## Properties
### {{% prop-heading "group" %}}
> **[MixGroup](/vext/ref/fb/mixgroup)** | **nil**

### {{% prop-heading "state" %}}
> **[MixGroupState](/vext/ref/fb/mixgroupstate)**

### {{% prop-heading "attackTime" %}}
> **float**

### {{% prop-heading "releaseTime" %}}
> **float**

### {{% prop-heading "properties" %}}
> **[MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)**[]

### {{% prop-heading "isDominant" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) type.

