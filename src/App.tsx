import { Autocomplete } from '@/components/Autocomplete';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { CheckboxGroup } from '@/components/CheckboxGroup';
import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';
import { DateRange, DateRangePicker } from '@/components/DateRangePicker';
import { FormItem } from '@/components/FormItem';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { MultiSelect } from '@/components/MultiSelect';
import { RadioGroup } from '@/components/RadioGroup';
import { SingleSelect } from '@/components/Select';
import { SwitchGroup } from '@/components/SwitchGroup';
import { Textarea } from '@/components/Textarea';
import {
  clouds,
  features,
  languages,
  libraries,
  projectTypes,
  settingsOptions,
  themeOptions,
} from '@/constants';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  // Text inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Single selects
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [library, setLibrary] = useState('');

  // Date inputs
  const [startDate1, setStartDate1] = useState<Date>();
  const [endDate1, setEndDate1] = useState<Date>();
  const [dateRange2, setDateRange2] = useState<DateRange>({});

  // Multi selects
  const [selectedClouds, setSelectedClouds] = useState<string[]>([]);

  // Switches
  const [settings, setSettings] = useState<string[]>([]);

  // Checkboxes
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Radio
  const [projectType, setProjectType] = useState('web');

  // Theme
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  useEffect(() => {
    const classList = document.documentElement.classList;

    classList.remove('light', 'dark', 'theme-uswds');
    classList.add(currentTheme);
  }, [currentTheme]);

  // Simulated async search function
  const searchLibraries = async (query: string) => {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter libraries based on query
    return libraries.filter(
      lib =>
        lib.label.toLowerCase().includes(query.toLowerCase()) ||
        lib.value.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const themeSelectOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'theme-uswds', label: 'USWDS' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 mb-20">
      <div className="w-full max-w-xl space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">Summit UI</h1>
            <p className="text-muted-foreground mt-2">Configure your development environment</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Radix UI</Badge>
              <Badge variant="secondary">cmdk</Badge>
              <Badge variant="secondary">React Day Picker</Badge>
            </div>
          </div>
          <div className="w-[16rem]">
            <SingleSelect
              options={themeSelectOptions}
              value={currentTheme}
              onChange={setCurrentTheme}
              placeholder="Select theme..."
            />
          </div>
        </div>

        <div>
          <div className="space-y-1">
            <Label className="font-bold">Badges</Label>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div className="space-y-6">
          {/* Text Inputs */}
          <div className="space-y-4">
            <FormItem label="Name" hintText="Your full name as it will appear in the project">
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormItem>

            <FormItem label="Email" hintText="Your work email address for project communications">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormItem>

            <FormItem label="Company" hintText="The organization you represent">
              <Input
                id="company"
                placeholder="Enter your company"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </FormItem>

            <FormItem
              label="Project Description"
              hintText="A brief overview of your project's goals and requirements"
              errorText={
                description.length > 20 ? 'Project description must be 20 characters or less' : null
              }
            >
              <Textarea
                id="description"
                placeholder="Describe your project in 20 characters or less..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </FormItem>
          </div>

          {/* Theme Select */}
          <FormItem label="Theme" hintText="Select your preferred theme">
            <SingleSelect
              options={themeOptions}
              value={theme}
              onChange={setTheme}
              placeholder="Select theme..."
            />
          </FormItem>

          {/* Library Combobox */}
          <FormItem label="Library" hintText="Search and select from over 140 React libraries">
            <Combobox
              options={libraries}
              value={library}
              onChange={setLibrary}
              placeholder="Select library..."
              searchPlaceholder="Search libraries..."
            />
          </FormItem>

          {/* Async Search with Autocomplete */}
          <FormItem
            label="React Library Search"
            hintText="Search through 140+ React libraries with async loading"
          >
            <Autocomplete
              loadOptions={searchLibraries}
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search libraries (enter 'Re' to get results)..."
              debounceMs={500}
              minSearch={1}
            />
          </FormItem>

          {/* Switches */}
          <FormItem
            label="Project Settings"
            hintText="Configure your project's visibility and licensing"
          >
            <SwitchGroup
              options={settingsOptions}
              value={settings}
              onChange={setSettings}
              columns={1}
            />
          </FormItem>

          {/* Radio Buttons */}
          <FormItem
            label="Project Type"
            hintText="Select the primary type of application you're building"
          >
            <RadioGroup options={projectTypes} value={projectType} onChange={setProjectType} />
          </FormItem>

          {/* Checkbox Group */}
          <FormItem label="Features" hintText="Select all the features you need in your project">
            <CheckboxGroup
              options={features}
              value={selectedFeatures}
              onChange={setSelectedFeatures}
            />
          </FormItem>

          {/* Single Selects */}
          <div className="space-y-4">
            <FormItem
              label="Primary Language"
              hintText="Choose the main programming language for development"
            >
              <Combobox
                options={languages}
                value={language}
                onChange={setLanguage}
                placeholder="Select language..."
                searchPlaceholder="Search language..."
              />
            </FormItem>
          </div>

          {/* Date Inputs */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormItem label="Project Start" hintText="When development begins">
                <DatePicker value={startDate1} onChange={setStartDate1} placeholder="Pick a date" />
              </FormItem>

              <FormItem label="Project End" hintText="Expected completion date">
                <DatePicker value={endDate1} onChange={setEndDate1} placeholder="Pick a date" />
              </FormItem>
            </div>

            <FormItem
              label="Maintenance Period"
              hintText="Select the maintenance start and end dates"
            >
              <DateRangePicker
                value={dateRange2}
                onChange={setDateRange2}
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
              />
            </FormItem>
          </div>

          {/* Multi Selects */}
          <div className="space-y-4">
            <FormItem label="Cloud Providers" hintText="Select all cloud platforms you plan to use">
              <MultiSelect
                options={clouds}
                value={selectedClouds}
                onChange={setSelectedClouds}
                placeholder="Select cloud providers..."
                searchPlaceholder="Search cloud providers..."
              />
            </FormItem>
          </div>

          <Button className="w-full" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
